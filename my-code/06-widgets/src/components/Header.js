import React, { Fragment } from 'react';

import Link from './Link';

const Header = () => {
  return (
    <Fragment>
      <div className="ui secondary pointing menu">
        <Link  path="/" text='Accordian' />
        <Link  path="/search" text='Search' />
        <Link  path="/dropdown" text='Dropdown' />
        <Link  path="/translate" text='Translate' />
      </div>
      <hr />
    </Fragment>
  );
}

export default Header;