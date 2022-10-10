import React, { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { UserContext } from "../../App";

const UserProfile = () => {
  const { setFormVisible, user, setUser } = useContext(UserContext);

  const [activeSettingList, setActiveSettingList] = useState(false);

  const isAuthenticated = user.name && user.email;

  const handleAppearClick = () =>
    isAuthenticated ? setActiveSettingList(true) : setFormVisible(true);

  const handleAppearHover = () => isAuthenticated && setActiveSettingList(true);
  const handleDisappear = () => setActiveSettingList(false);
  const handleLogOut = () => {
    setUser({});
    localStorage.removeItem("user");
  };

  const variants = {
    init: { opacity: 0, x: "-50%", y: -20 },
    anim: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: "-50%", y: 20 },
  };

  return (
    <div className="user">
      <p
        className="user-name"
        onMouseEnter={handleAppearHover}
        onMouseLeave={handleDisappear}
        onClick={handleAppearClick}
      >
        {isAuthenticated ? user.name : "Log In"}
      </p>
      <AnimatePresence>
        {activeSettingList && (
          <motion.ul
            className="setting-list"
            variants={variants}
            initial={"init"}
            animate={"anim"}
            exit={"exit"}
            onMouseEnter={handleAppearClick}
            onMouseLeave={handleDisappear}
            transition={{ delay: 0.3 }}
          >
            <li onClick={handleLogOut}>log out</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserProfile;
