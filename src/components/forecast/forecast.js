import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import './forecast.css' ;
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const dayinaWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayinaWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayinaWeek));
    console.log(forecastDays);

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min)}&#176;C / {Math.round(item.main.temp_max)}&#176;C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-items">
                                    <label>Feels like</label>
                                    <label>{Math.round(item.main.feels_like)}&#176;C</label>
                                </div>
                                <div className="daily-details-grid-items">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="daily-details-grid-items">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity} %</label>
                                </div>
                                <div className="daily-details-grid-items">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all} %</label>
                                </div>
                                <div className="daily-details-grid-items">
                                    <label>Wind speed</label>
                                    <label>{item.wind.speed} KpH</label>
                                </div>
                                <div className="daily-details-grid-items">
                                    <label>Sea level</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                ))}
            </Accordion>
        </>
    );
}

export default Forecast;