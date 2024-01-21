import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";

export default function ControlledAccordion() {
  const [expanded, setExpanded] = React.useState(false);
  //   const handleChange = (acc) => (event, isExpanded) => {
  //     setExpanded(isExpanded ? acc : false);
  //   };
  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
          "& .MuiAccordionDetails-root": {
            display: expanded ? "block" : "none",
          },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h4">Item 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5">
            This section contains the collapsible content of item 1
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
          "& .MuiAccordionDetails-root": {
            display: expanded ? "block" : "none",
          },
        }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h4">Item 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5">
            This section contains the collapsible content of item 2
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
          "& .MuiAccordionDetails-root": {
            display: expanded ? "block" : "none",
          },
        }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h4">Item 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5">
            This section contains the collapsible content of item 3
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
