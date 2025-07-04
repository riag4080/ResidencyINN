import React, { useEffect, useState } from "react"
import BookingForm from "../booking/BookingForm"
import {
	FaUtensils,
	FaWifi,
	FaTv,
	FaWineGlassAlt,
	FaParking,
	FaTshirt,
  FaSnowflake,
  FaVideo,
  FaPumpSoap
} from "react-icons/fa"
import { useParams } from "react-router-dom"
import { getRoomById } from "../utils/ApiFunctions"
import RoomCarousel from "../common/RoomCarousel"

const Checkout = () => {
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [roomInfo, setRoomInfo] = useState({
		photo: "",
		roomType: "",
		roomPrice: ""
	})

	const { roomId } = useParams()

	useEffect(() => {
		setTimeout(() => {
			getRoomById(roomId)
				.then((response) => {
					setRoomInfo(response)
					setIsLoading(false)
				})
				.catch((error) => {
					setError(error)
					setIsLoading(false)
				})
		}, 2000)
	}, [roomId])

	return (
		<div>
			<section className="container">
				<div className="row"> 
          {/* different ^ */}
					<div className="col-md-4 mt-5 mb-5">
						{isLoading ? (
							<p>Loading room information...</p>
						) : error ? (
							<p>{error}</p>
						) : (
							<div className="room-info">
								<img
									src={`data:image/png;base64,${roomInfo.photo}`}
									alt="Room photo"
									style={{ width: "100%", height: "200px" }}/>
								<table className="table table-bordered">
									<tbody>
										<tr>
											<th>Room Type :</th>
											<td>{roomInfo.roomType}</td>
										</tr>
										<tr>
											<th>Price per night:</th>
											<td>${roomInfo.roomPrice}</td>
										</tr>
										<tr>
											<th>Room Service:</th>
											<td>
												<ul className="list-unstyled">
													<li>
														<FaWifi /> Wifi
													</li>
                          <li>
														<FaTshirt /> Laundry
													</li>
													<li>
														<FaUtensils /> Culinary
													</li>
                          <li>
														<FaSnowflake /> Air Conditioning
													</li>
													<li>
														<FaWineGlassAlt /> Mini-bar
													</li>
													<li>
														<FaTv/> Entertainment
													</li>
                          <li>
														<FaPumpSoap /> Essentials
													</li>
												</ul>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						)}
					</div>
					<div className="col-md-8">
						<BookingForm />
					</div>
				</div>
			</section>
			<div className="container">
				<RoomCarousel />
			</div>
		</div>
	)
}
export default Checkout