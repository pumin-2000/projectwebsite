Featurelist = React.createClass({
    features: [
        {
            icon: "fa fa-image fa-2x",
            bigtext: "Like and appreciate your work",
            littletext: "from friends in News Feed"
        },
        {
            icon: "fa fa-share fa-2x",
            bigtext: "Respond to simple comment messages",
            littletext: "in your life on your Timeline"
        }

    ],
    render(){
        var rows = this.features.map(function (feature) {
            return (
                <li key={feature.icon}>
                    <h3 className="btn-btn-lg">
                        <i className={feature.icon}></i>
                                <span>
                                    <strong> {feature.bigtext}</strong>
                                    <small> {feature.littletext}</small>
                                </span>
                    </h3>

                </li>
            )
        });
        return (
            <div>
                <h2 className="col-md-11 featurelist hidden-xs">
                    Share pictures and photography experiences
                    Yours to friends on Moment.
                </h2>
                <ul className="ds-btn hidden-xs">
                    {rows}
                </ul>
            </div>
        )
    }
});
