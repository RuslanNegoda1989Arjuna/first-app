import styles from "../vote.module.scss"

const VoteResult = ({total, republicansPercent, democratsPercent}) => {
    return (
        <div className={styles.block}>
            <h4 className={styles.blockTitle}> Vote results</h4>
            <p>Total vote: {total}</p>
            <p>Republicans: {republicansPercent}%</p>
            <p>Democrats: {democratsPercent}%</p>
        </div>
    )
}

export default VoteResult;