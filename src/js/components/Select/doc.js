import { describe, PropTypes } from 'react-desc';

export default (Select) => {
  const DocumentedSelect = describe(Select)
    .description(
      'Grommet 2 Select with custom label editor.'
    ).usage(`
    $ npm install grommet-controls\n
    import { Select } from 'grommet-controls';\n
    <Select />
    `);

  DocumentedSelect.propTypes = {
    label: PropTypes.func.description('A function to render/edit the selected items. `({ placeholder, value, onChange }) => {}`'),
  };

  return DocumentedSelect;
};
