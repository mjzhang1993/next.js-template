import React, { Component } from 'react';
import Link from 'next/link';

export default class AboutCom extends Component {
   constructor(props) {
      super(props);
   }
   increase = () => {
      console.log('increase');
      this.props.changeCount(this.props.count + 1);
   };
   render() {
      const { count } = this.props;
      return (
         <div>
            <p>this is about page </p>
            <Link href="/">
              <a>to index page</a>
            </Link>
            <img src="/static/test.png" alt="test" />
            <p>count = {count}</p>
            <button onClick={this.increase}>click</button>
         </div>
      );
   }
}