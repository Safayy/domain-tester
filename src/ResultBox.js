function ResultBox({ domainName, isAvailable }) {
    return (
        <div className="ResultBox">
            <p>Domain {domainName} is <br></br>
                <a className={(isAvailable)?".green":".red"}>
                    {(isAvailable)?"available":"unavailable"}
                </a>.</p>
        </div>
    );
}

export default ResultBox;