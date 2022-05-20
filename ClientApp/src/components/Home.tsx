import React, { Component } from 'react';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <CalendarComponent id="calendar" />
            <CalendarComponent id="calendar" />
	  </div>
    );
  }
}
