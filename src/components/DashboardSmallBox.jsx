import PropTypes from 'prop-types';

export default function DashboardSmallBox({ data, name }) {
    return (
        <div className="shadow-xl w-1/4 flex flex-col gap-3 items-center justify-center rounded-xl h-52">
            <h2 className="font-bold text-primary text-3xl text-center">
                {data}
            </h2>
            <p className="text-lg text-primary font-semibold">{name}</p>
        </div>
    );
}

DashboardSmallBox.propTypes = {
    data: PropTypes.number,
    name: PropTypes.string,
};
