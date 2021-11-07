// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/phonebook-actions';
import s from './Filter.module.css';

export default function Filter() {
  // const value = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <label className={s.label}>
      <span className={s.span}>Find contacts by name</span>
      <input
        className={s.input}
        type="text"
        // value={value}
        onChange={onChange}
      ></input>
    </label>
  );
}

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   value: state.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
