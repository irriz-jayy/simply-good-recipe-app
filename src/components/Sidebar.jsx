import {
  StarIcon,
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  CakeIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", icon: HomeIcon, href: "/", current: true },
  { name: "Recipes", icon: CakeIcon, href: "#", current: false },
  { name: "Favourites", icon: StarIcon, href: "#", current: false },
  { name: "Profile", icon: UserCircleIcon, href: "#", current: false },
  {
    name: "Logout",
    icon: ArrowRightOnRectangleIcon,
    href: "#",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-background1 pt-5 pb-4">
      <div className="flex flex-shrink-0 items-center space-y-5 px-4">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=400"
          alt="Your Company"
        />
        <p className="font-curve font-medium m-2">Simply Good</p>
      </div>
      <div className="mt-5 flex flex-grow flex-col">
        <nav className="flex-1 space-y-1 bg-background1" aria-label="Sidebar">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-background1 border-blue-400 text-font1"
                  : "border-transparent text-font1 hover:bg-background2 hover:opacity-30 hover:text-font1",
                "group flex items-center px-3 py-2 text-sm font-medium border-l-4"
              )}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-font1"
                    : "text-font1 group-hover:text-font1",
                  "mr-3 flex-shrink-0 h-6 w-6"
                )}
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
