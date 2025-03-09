import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SkillList = React.memo(({ className, children, delay = 1000 }) => {
  const [index, setIndex] = useState(0);
  const childrenArray = useMemo(() => React.Children.toArray(children), [children]);

  useEffect(() => {
    if (index < childrenArray.length - 1) {
      const timeout = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [index, delay, childrenArray.length]);

  const itemsToShow = useMemo(() => {
    return childrenArray.slice(0, index + 1); // Keep items in order
  }, [index, childrenArray]);

  return (
    <div className={`flex flex-wrap justify-center gap-6 ${className}`}>
      <AnimatePresence>
        {itemsToShow.map((item, idx) => (
          <SkillListItem key={item.key || idx}>{item}</SkillListItem>
        ))}
      </AnimatePresence>
    </div>
  );
});

SkillList.displayName = "SkillList";

function SkillListItem({ children }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full sm:w-80 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-lg font-semibold text-center text-gray-800">
        {children}
      </div>
    </motion.div>
  );
}

export default SkillList;
