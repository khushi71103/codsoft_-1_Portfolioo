import { motion } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.1 }, //bottom to up items
  },
  closed: {
    transition: {
      staggerChildren: 0.05, //up to bottom
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y:0,
    opacity:1,
  },
  closed: {
    y:50,
    opacity:0,
    },
  };


const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a href={"#${item}"} key={item} variants={itemVariants}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
