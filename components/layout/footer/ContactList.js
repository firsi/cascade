import { Box } from "grommet";
import Contact from "./Contact";

const ContactList = () => {
  return (
    <Box>
      <Contact
        title="Jardin des Fêtes et loisirs la Cascade"
        contact="+229 51 87 65 90 / +229 97 98 29 77"
      />
      <Contact
        title="Global Care Massage"
        contact="+229 51 87 65 89 / +229 97 98 29 77"
      />
      <Contact
        title="Maquis Le Pilon"
        contact="+229 97 42 97 97 / +229 97 98 29 77"
      />
      <Contact
        title="Garderie Brin d’éveil"
        contact="+229 60 98 29 77 / +229 97 98 29 77"
      />
    </Box>
  );
};

export default ContactList;
