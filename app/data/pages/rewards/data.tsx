import { Typography } from "@mui/material";
import Link from "next/link";

export const favorites = [
  {
    header: "25",
    image: "/images/rewards/25.png",
    title: "Customize your drink",
    sentence:
      "Make your drink just right with an extra espresso shot or a dash of your favorite syrup.",
  },
  {
    header: "100",
    image: "/images/rewards/100.png",
    title:
      "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
    sentence:
      "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.",
  },
  {
    header: "200",
    image: "/images/rewards/200.png",
    title: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
    sentence:
      "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.",
  },
  {
    header: "300",
    image: "/images/rewards/300.png",
    title: "Sandwich, protein box or at-home coffee",
    sentence:
      "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.",
  },
  {
    header: "400",
    image: "/images/rewards/400.png",
    title: "Select Starbucks® merchandise",
    sentence:
      "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.",
  },
];

const stepstyle = {
  fontSize: 14,
  fontWeight: 300,
};

export const steps = [
  {
    id: 1,
    title: "Create an account",
    content: (
      <Typography sx={stepstyle}>
        To get started,{" "}
        <Link
          href="/rewards"
          className="underline text-[#036041] hover:no-underline"
        >
          join now.
        </Link>{" "}
        You can also{" "}
        <Link
          href="/rewards"
          className="underline text-[#036041] hover:no-underline"
        >
          join in the app
        </Link>
        to get access to the full range of Starbucks Rewards benefits.
      </Typography>
    ),
  },
  {
    id: 2,
    title: "Order and pay how you'd like",
    content: (
      <Typography sx={stepstyle}>
        Use cash, credit/debit card or save some time and pay right through the
        app. {`You'll`} collect Stars all ways.{" "}
        <Link
          href="/rewards"
          className="underline text-[#036041] hover:no-underline"
        >
          Learn how
        </Link>
      </Typography>
    ),
  },
  {
    id: 3,
    title: "Earn Stars, get Rewards",
    content: (
      <Typography sx={stepstyle}>
        As you earn Stars, you can redeem them for Rewards-like free food,
        drinks, and more. Start redeeming with as little as 25 Stars!
      </Typography>
    ),
  },
];

export const stepData = [
  {
    header: "Getting started is easy",
    subHeader: "Earn Stars and get rewarded in a few easy steps.",
    children: [
      {
        id: 1,
        title: "Create an account",

        content: (
          <Typography sx={stepstyle}>
            To get started,{" "}
            <Link
              href="/rewards"
              className="underline text-[#036041] hover:no-underline"
            >
              join now.
            </Link>{" "}
            You can also{" "}
            <Link
              href="/rewards"
              className="underline text-[#036041] hover:no-underline"
            >
              join in the app
            </Link>
            to get access to the full range of Starbucks Rewards benefits.
          </Typography>
        ),
      },
      {
        id: 2,
        title: "Order and pay how you'd like",
        content: (
          <Typography sx={stepstyle}>
            Use cash, credit/debit card or save some time and pay right through
            the app. {`You'll`} collect Stars all ways.{" "}
            <Link
              href="/rewards"
              className="underline text-[#036041] hover:no-underline"
            >
              Learn how
            </Link>
          </Typography>
        ),
      },
      {
        id: 3,
        title: "Earn Stars, get Rewards",
        content: (
          <Typography sx={stepstyle}>
            As you earn Stars, you can redeem them for Rewards-like free food,
            drinks, and more. Start redeeming with as little as 25 Stars!
          </Typography>
        ),
      },
    ],
  },
];
