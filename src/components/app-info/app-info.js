import './app-info.css';

const AppInfo = ({number, hasCookiesNumber}) => {
    return (
        <div className="app-info">
            <h1>Employees book</h1>
            <h2>Total employees count: {number}</h2>
            <h2>People with bonus count: {hasCookiesNumber}</h2>
        </div>
    );
};

export default AppInfo;