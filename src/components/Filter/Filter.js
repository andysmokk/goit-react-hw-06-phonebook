import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phonebook-actions';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label className={s.label}>
      <span className={s.span}>Find contacts by name</span>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
