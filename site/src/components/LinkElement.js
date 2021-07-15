const LinkElement = ({ name, link }) => {
  return (
    <a href={link} rel="noreferrer" target="_blank">
      <li>{name}</li>
    </a>
  );
};

export default LinkElement;
