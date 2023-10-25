

const HeartIcon = (props) => {

    const {color, height, width} = props
    return (
        <div style={{ margin: '10px' }}>
            <svg fill={color || "var(--body-text-var)"} width={width || "2em"} height={height || "2em"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,10 C20,6.84015641 18.2825207,5 15.5,5 C14.0164554,5 13.0260416,5.56595071 12.4472136,6.7236068 C12.2629515,7.09213107 11.7370485,7.09213107 11.5527864,6.7236068 C10.9739584,5.56595071 9.98354462,5 8.5,5 C5.71747931,5 4,6.84015641 4,10 C4,12.3991298 6.6486666,15.3989911 12,18.9034052 C17.3513334,15.3989911 20,12.3991298 20,10 Z M15.5,4 C18.8508126,4 21,6.30270074 21,10 C21,12.8939525 18.0716206,16.1668472 12.2716256,19.9197851 C12.1063343,20.0267383 11.8936657,20.0267383 11.7283744,19.9197851 C5.92837945,16.1668472 3,12.8939525 3,10 C3,6.30270074 5.14918735,4 8.5,4 C10.0277019,4 11.2096804,4.52341355 12,5.55573272 C12.7903196,4.52341355 13.9722981,4 15.5,4 Z"/>
            </svg>
        </div>

    )
}

export default HeartIcon