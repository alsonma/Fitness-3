import React from "react";
import "./Time.css";

function Time() {
  const schedule = [
    {
      time: "10.00",
      days: [
        {
          type: "gym",
          title: "Gym",
          duration: "10.00 - 11.00",
          trainer: "John Smith",
        },
        null,
        {
          type: "yoga",
          title: "Yoga",
          duration: "10.00 - 12.00",
          trainer: "John Smith",
        },
        null,
        {
          type: "body",
          title: "Body",
          duration: "10.00 - 12.00",
          trainer: "John Smith",
        },
        null,
        {
          type: "cardio",
          title: "Cardio",
          duration: "10.00 - 11.00",
          trainer: "John Smith",
        },
      ],
    },
    {
      time: "14.00",
      days: [
        null,
        {
          type: "running",
          title: "Running",
          duration: "14.00 - 16.00",
          trainer: "John Smith",
        },
        null,
        {
          type: "box",
          title: "Box",
          duration: "14.00 - 15.00",
          trainer: "John Smith",
        },
        null,
        {
          type: "gym",
          title: "Gym",
          duration: "14.00 - 16.00",
          trainer: "John Smith",
        },
        null,
      ],
    },
    {
      time: "16.00",
      days: [
        {
          type: "cardio",
          title: "Cardio",
          duration: "16.00 - 18.00",
          trainer: "John Smith",
        },
        null,
        {
          type: "gym",
          title: "Gym",
          duration: "16.00 - 19.00",
          trainer: "John Smith",
        },
        null,
        {
          type: "yoga",
          title: "Yoga",
          duration: "16.00 - 18.00",
          trainer: "John Smith",
        },
        null,
        {
          type: "gym",
          title: "Gym",
          duration: "16.00 - 20.00",
          trainer: "John Smith",
        },
      ],
    },
    {
      time: "18.00",
      days: [
        {
          type: "box",
          title: "Box",
          duration: "18.00 - 22.00",
          trainer: "John Smith",
        },
        {
          type: "body",
          title: "Body",
          duration: "18.00 - 20.00",
          trainer: "John Smith",
        },
        null,
        {
          type: "crossfit",
          title: "Crossfit",
          duration: "18.00 - 21.00",
          trainer: "John Smith",
        },
        null,
        {
          type: "cardio",
          title: "Cardio",
          duration: "18.00 - 22.00",
          trainer: "John Smith",
        },
        null,
      ],
    },
    {
      time: "20.00",
      days: [
        null,
        {
          type: "gym",
          title: "Gym",
          duration: "20.00 - 12.00",
          trainer: "John Smith",
        },
        {
          type: "body",
          title: "Body",
          duration: "20.00 - 21.00",
          trainer: "John Smith",
        },
        null,
        {
          type: "cardio",
          title: "Cardio",
          duration: "20.00 - 22.00",
          trainer: "John Smith",
        },
        null,
        {
          type: "crossfit",
          title: "Crossfit",
          duration: "20.00 - 21.00",
          trainer: "John Smith",
        },
      ],
    },
  ];

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <section className="trainer-schedule">
      <div className="trainer-container">

        {/* Section Title */}
        <div className="section-title">
          <h2>Our Trainer</h2>
          <p>
            Our fitness experts can help you discover new training techniques.
          </p>
        </div>

        {/* Schedule Table */}
        <div className="schedule-table">
          <table>
            <thead>
              <tr>
                <th></th>

                {days.map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {schedule.map((row, rowIndex) => (
                <tr key={rowIndex}>

                  {/* Time */}
                  <td className="workout-time">
                    {row.time}
                  </td>

                  {/* Days */}
                  {row.days.map((workout, dayIndex) => (
                    <td
                      key={dayIndex}
                      className={workout ? workout.type : ""}
                    >
                      {workout && (
                        <>
                          <h6>{workout.title}</h6>

                          <span>{workout.duration}</span>

                          <div className="trainer-name">
                            {workout.trainer}
                          </div>
                        </>
                      )}
                    </td>
                  ))}

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

export default Time;
