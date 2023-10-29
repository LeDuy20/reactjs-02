import { FaCrown } from "react-icons/fa";
import { programs } from "../data";
import SectionHead from "./SectionHead";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";

const Programs = () => {
    return (
        <section className="program">
            <div className="container program__container">
                <SectionHead icon={<FaCrown />} title="Program" />
                <div className="programs__wrapper">
                    {programs.map(({ id, icon, title, info, path }) => {
                        return (
                            <Card className="programs__program" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                                <Link to={path} className="btn sm">
                                    Learn More <BiSolidRightArrow />
                                </Link>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Programs;
