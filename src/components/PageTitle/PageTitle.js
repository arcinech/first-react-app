import PropTypes from 'prop-types';
import styles from './PageTitle.module.scss';

const PageTitle = ({children}) => {

  return (
    <h2 className={styles.title}>{children}</h2>
  );
};

export default PageTitle;

PageTitle.propTypes = {
  children: PropTypes.string
};