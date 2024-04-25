import React from "react";
import MainLayout from "../components/layout/MainLayout";
import data from "../data/portfolio.json";
import Link from "next/link";
const PortfolioSingleColumnpage = () => {
	return (
		<MainLayout>
			<div className="portfolio-two-column-section pt-130 mb-130">
				<div className="container">
					<div className="row g-md-4 gy-5">
						<div className="col-md-12">
							{data.map((i) => {
								return (
									<div key={i.id} className="eg-card4 two mb-60">
										<div className="row g-0">
											<div className="col-md-6">
												<div className="card-img mb-0">
													<img src={i.img} alt="" />
													<ul className="card-content2">
														{i.bullets.map((index, a) => {
															return <li key={index}>{index}</li>;
														})}
													</ul>
												</div>
											</div>
											<div className="col-md-6">
												<div className="card-content">
													<div className="title-and-btn">
														<Link
															legacyBehavior
															href="/portfolio-single-column"
														>
															<a href="#">{i.tag}</a>
														</Link>
														<h4>
															<Link legacyBehavior href="/portfolio-details">
																<a>{i.title}</a>
															</Link>
														</h4>
													</div>
													<div className="card-btn">
														<Link legacyBehavior href={i.lien}>
															<a className="explore-btn two btn-hover">
																{i.date}
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	width={12}
																	height={12}
																	viewBox="0 0 12 12"
																>
																	<path
																		fillRule="evenodd"
																		clipRule="evenodd"
																		d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
																	/>
																</svg>
																<span />
															</a>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default PortfolioSingleColumnpage;
