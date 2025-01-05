import {
  MessageIcon,
  ShoppingBagIcon,
  StarsSvg,
} from "../../../assets/icons/Icons";
import DescriptionMessage from "../../../components/common/DescMsg/DescriptionMessage";

export function DescMessage(pageNum) {
  switch (pageNum) {
    case 1: {
      return {
        icon: <StarsSvg />,
        title: {
          text: "Start turning your ideas into reality.",
          excerptLength: 3,
        },
        p1: "Create a free account and get full access to all features for",
        p2: "30-days. No credit card needed. Get started in 2 minutes.",
      };
    }
    case 2: {
      return {
        icon: <MessageIcon />,
        title: {
          text: "Verify your account now",
          excerptLength: 2,
        },
        p1: "Create a free account and get full access to all features for",
        p2: "30-days. No credit card needed. Get started in 2 minutes.",
      };
    }
    case 3: {
      return {
        icon: <ShoppingBagIcon />,
        title: {
          text: "Setup your store the way you like",
          excerptLength: 3,
        },
        p1: "Create a free account and get full access to all features for",
        p2: "30-days. No credit card needed. Get started in 2 minutes.",
      };
    }
    default:
      return {};
  }
}

function RightSection({ pageNum = 1 }) {
  const { icon, title, p1, p2 } = DescMessage(pageNum);
  return (
    <section className="register-page__rsec">
      <DescriptionMessage icon={icon} title={title} p1={p1} p2={p2} />
    </section>
  );
}

export default RightSection;
