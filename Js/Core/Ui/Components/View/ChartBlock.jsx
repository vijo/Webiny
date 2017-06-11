import Webiny from 'Webiny';
import styles from './styles.css';

class ChartBlock extends Webiny.Ui.Component {

}

ChartBlock.defaultProps = {
    title: '',
    description: '',
    renderer() {
        const {styles} = this.props;

        return (
            <div className={styles.chartBlock}>
                <div className={styles.header}>
                    <h4 className={styles.title}>{this.props.title}</h4>
                    <div className={styles.titleLight}>{this.props.description}</div>
                </div>
                <div className={styles.container}>
                    {this.props.children}
                </div>
            </div>
        );
    }
};

export default Webiny.createComponent(ChartBlock, {styles});