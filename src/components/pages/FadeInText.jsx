import { motion } from "framer-motion";
function FadeInText({ text }) {
  const FadeInText = text.split(" ");

  return (
    <div className="FadeInText">
      {FadeInText.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: i / 2,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
}

export default FadeInText;
