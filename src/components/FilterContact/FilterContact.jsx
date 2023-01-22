import styles from "../FilterContact/filterContact.module.css";
import PropTypes from 'prop-types';
const FilterContact = ({ value, onChange }) => {
  return (
    <label className={styles.labelFilter}>
      Find contacts by name{' '}
      <input className={styles.inputFilter} type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default FilterContact;

FilterContact.propTypes = {
  value: PropTypes.string,
  onChengeFilter: PropTypes.func,
};

