import styled from 'styled-components';
import styles from '@/styles/Home.module.css'

const HeaderWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
const Heading1 = styled.h1`
    color: #c46aba;
`


const HeadingLabel = ({ label })=> {
    
    return (
        <HeaderWrapper className={styles.description}>
            <Heading1>{ label }</Heading1>
        </HeaderWrapper>
    )
}

export default HeadingLabel;
