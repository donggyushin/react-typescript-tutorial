import React from 'react'
import styles from './style.module.scss'

interface Props {
    name: string,
    age: number,
    fn?: () => void,    // If you don't want this property be mandatory
    ok: boolean,
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const presenter: React.FC<Props> = ({ handleInput }) => {
    return <div className={styles.container}>
        <input onChange={handleInput} />
    </div>
}

export default presenter;