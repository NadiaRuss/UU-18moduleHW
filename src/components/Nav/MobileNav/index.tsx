import React, { useState } from "react";
import ModalOpen from '../ModalOpen';
import styles from './style.module.css'



const MobileNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        const firstChild = target.firstChild as HTMLElement | null;
        e.preventDefault();
        if (firstChild && firstChild.classList) { // Проверка на null и наличие classList
            if (firstChild.classList.contains("animate")) {
                firstChild.classList.remove("animate");
            } else {
                firstChild.classList.add("animate");
            }
        }
    
        // (e.target.firstChild.classList.contains("animate") === true) ? e.target.firstChild.classList.remove("animate") : e.target.firstChild.classList.add("animate");
        setIsOpen(!isOpen);
    }
    return (
        <div className={styles.burger_menu} onClick={handleClick}>
            <div className={styles.bar}>
            </div>
            {isOpen && (
        //   <div className={styles.burger_nav}>
            <ModalOpen />
        //   </div>
        )}
        </div>

    );
}
export default MobileNav;