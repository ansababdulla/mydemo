import React from 'react';
import Aux from '../../hoc/Aux';
import classes from '../../Components/Layout/Layout.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
const layout = (props) => (
    <Aux>
    <Toolbar/>
<main className={classes.Content}>{props.children}</main>
</Aux>
);
export default layout;