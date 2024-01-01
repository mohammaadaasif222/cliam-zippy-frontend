import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
const Sidebar = () => {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[15rem] p-4 shadow-sm shadow-blue-gray-900/5">
      <List className="pt-10 px-5">
        <ListItem className="gap-5 transition duration-300 ease-in-out hover:bg-gray-200 p-3 rounded">
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <hr/>
        <ListItem className="gap-5 transition duration-300 ease-in-out hover:bg-gray-200 p-3 rounded">
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          E-Commerce
        </ListItem>
        <hr/>
        <ListItem className="gap-5 transition duration-300 ease-in-out hover:bg-gray-200 p-3 rounded">
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <hr/>
        <ListItem className="gap-5 transition duration-300 ease-in-out hover:bg-gray-200 p-3 rounded">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <hr/>
        <ListItem className="gap-5 transition duration-300 ease-in-out hover:bg-gray-200 p-3 rounded">
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <hr/>
        <ListItem className="gap-5 transition duration-300 ease-in-out hover:bg-gray-200 p-3 rounded">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
        <hr/>
      </List>
    </Card>
  );
};

export default Sidebar;
