import styled from "styled-components";

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${(props) => (props.color ? props.color : "black")}};
    opacity: ${(props) => (props.opacity ? props.opacity : 0.5)};
    transition: .5s opacity;
`;

export default Overlay;
