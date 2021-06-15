import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion } from './Accordion';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  }
}));

export default function ControlledAccordions({ data }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>

      {

        data.map(({title, description, component}, index) => (
          <Accordion
            title={title}
            description={description}
            index={index + 1}
            expanded={expanded}
            handleChange={handleChange}
            key={`ItemAccordion_${title}_${index}`}
          >
            {component}
          </Accordion>
        ))

      }

    </div>
  );
}