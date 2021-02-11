import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";

import {Link} from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <h2>Hello ! sidebar</h2>
      <div>
      
       <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <Link to="/">
            <ListItemText primary="Dashboard" />
          </Link>
        </ListItem>

        
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <Link to="/import">
            <ListItemText primary="Import" />
          </Link>
        </ListItem>

        
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <Link to="/orders">
              <ListItemText primary="Orders" />
          </Link>
        </ListItem>
        

        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <Link to="/reports">
            <ListItemText primary="Reports" />
          </Link>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <Link to="/products">
            <ListItemText primary="Products" />
          </Link>
        </ListItem>
      </div>

      <div>
        {/* <ListSubheader inset>Saved reports</ListSubheader> */}
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <Link to="/Brands">
          <ListItemText primary="Brands" />
          </Link>

        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Year-end sale" />
        </ListItem>
      </div>
            
    </div>
  );
}

export default Sidebar;
