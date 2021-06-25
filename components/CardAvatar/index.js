import avatar from "../../assets/avatar.png"
import Image from 'next/image'
import style from "./CardAvatar.module.scss"

const CardAvatar = () => {
    return (
        <div id="card-avatar" className={style.cardAvatarContainer}>
            <Image
                src={avatar}
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
                objectPosition="center center"
            />
        </div>
    );
}

export default CardAvatar;