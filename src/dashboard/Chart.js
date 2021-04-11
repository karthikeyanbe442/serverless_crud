import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, expense, balance ) {
  return { time, expense, balance };
}

const data = [
  createData('01-MAR-21', 0, 2400),
  createData('05-MAR-21', 300, 2100),
  createData('10-MAR-21', 600, 1800),
  createData('15-MAR-21', 800, 1800),
  createData('20-MAR-21', 1500, 1800),
  createData('25-MAR-21', 2000, 1800),
  createData('30-MAR-21', 2400, 1800),
  createData('05-APR-21', 2400, 1800),
  createData('10-APR-21', undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Last 30 days</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Expenses ($)
            </Label>
          </YAxis>
          <YAxis stroke={theme.palette.text.primary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.secondary }}
            >
              Balance ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="expense" stroke={theme.palette.primary.main} dot={false} />
          <Line type="monotone" dataKey="balance" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}