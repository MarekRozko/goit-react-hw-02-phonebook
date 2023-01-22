import styles from "../FilterContact/filterContact.module.css"
import PropTypes from 'prop-types';
const FilterContact = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      Find contacts by name{' '}
      <input className={styles.input} type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default FilterContact;

FilterContact.propTypes = {
    value: PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
}

