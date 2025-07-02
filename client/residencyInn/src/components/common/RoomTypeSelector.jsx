import React, { useState, useEffect } from "react"
import { getRoomTypes } from "../utils/ApiFunctions"

const RoomTypeSelector = ({ handleRoomInputChange, newRoom }) => {
	const [roomTypes, setRoomTypes] = useState([""])
	const [showNewRoomTypeInput, setShowNewRoomTypeInput] = useState(false) // if previously that type not exists to add
	const [newRoomType, setNewRoomType] = useState("")

	useEffect(() => {
		getRoomTypes().then((data) => {
			setRoomTypes(data)
		})
	}, []) // to get all the data from database and populate here

	const handleNewRoomTypeInputChange = (e) => {
		setNewRoomType(e.target.value)
	}

	const handleAddNewRoomType = () => {
		if (newRoomType !== "") {
			setRoomTypes([...roomTypes, newRoomType])
			setNewRoomType("")
			setShowNewRoomTypeInput(false)
		}
	}

	return (
		<>
			{roomTypes.length > 0 && (
				<div>
					<select
						required
						className="form-select"
            id='roomType'
						name="roomType"
						value={newRoom.roomType}
						onChange={(e) => {
							if (e.target.value === "Add New") {
								setShowNewRoomTypeInput(true)
							} else {
								handleRoomInputChange(e)
							}
						}}>
						<option value="">Select a room type</option>
						<option value={"Add New"}>Add New</option>
						{roomTypes.map((type, index) => (
							<option key={index} value={type}>
								{type}
							</option>
						))}
					</select>
					{showNewRoomTypeInput && (
						<div className="mt-2">
							<div className="input-group">
								<input
									type="text"
									className="form-control"
									placeholder="Enter New Room Type"
									//value={newRoomType}
									onChange={handleNewRoomTypeInputChange}
								/>
								<button className="btn btn-hotel" type="button" onClick={handleAddNewRoomType}>
									Add
								</button>
							</div>
						</div>
					)}
				</div>
			)}
		</>
	)
}

export default RoomTypeSelector