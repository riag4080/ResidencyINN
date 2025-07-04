package com.rin.residencyInn.repository;

import com.rin.residencyInn.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoomRepository  extends JpaRepository <Room, Long>{
    @Query("SELECT DISTINCT r.roomType FROM Room r")
    List<String> finDistinctRoomTypes();

    List<String> findDistinctRoomTypes();
}
