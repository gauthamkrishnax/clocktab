const LinkElement = ({ name, link }) => {
  return (
    <a href={link}>
      <li>{name}</li>
    </a>
  );
};

export default LinkElement;
