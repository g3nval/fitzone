// src/views/components/Workouts.jsx
import React, { useState } from 'react';
import WorkoutModal from './Modals/WorkoutModal';

export default function Workouts() {
    const [selectedWorkout, setSelectedWorkout] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    // Toàn bộ nội dung chi tiết (từ HTML gốc)
    const workoutData = {
        Yoga: {
            title: 'Lớp Yoga',
            content: `
        <h4 class="font-bold mb-2">Lịch học:</h4>
        <ul class="list-disc list-inside mb-4">
          <li>Thứ 2, 4, 6: 6:00 - 7:00 (Yoga buổi sáng)</li>
          <li>Thứ 3, 5, 7: 19:00 - 20:00 (Yoga buổi tối)</li>
          <li>Chủ nhật: 8:00 - 9:30 (Yoga cuối tuần)</li>
        </ul>
        <h4 class="font-bold mb-2">Nội dung:</h4>
        <ul class="list-disc list-inside">
          <li>Hatha Yoga cơ bản</li>
          <li>Vinyasa Flow</li>
          <li>Yin Yoga thư giãn</li>
          <li>Meditation & Breathing</li>
        </ul>
      `,
            icon: '🧘‍♀️',
            desc: 'Thư giãn, dẻo dai và cân bằng cơ thể.'
        },
        'Tập tạ': {
            title: 'Hướng dẫn Tập tạ',
            content: `
        <h4 class="font-bold mb-2">Chương trình tập:</h4>
        <ul class="list-disc list-inside mb-4">
          <li>Ngày 1: Ngực + Tay sau</li>
          <li>Ngày 2: Lưng + Tay trước</li>
          <li>Ngày 3: Vai + Bụng</li>
          <li>Ngày 4: Chân + Mông</li>
        </ul>
        <h4 class="font-bold mb-2">Bài tập cơ bản:</h4>
        <ul class="list-disc list-inside">
          <li>Bench Press, Push-up</li>
          <li>Pull-up, Rowing</li>
          <li>Squat, Deadlift</li>
          <li>Shoulder Press</li>
        </ul>
      `,
            icon: '🏋️',
            desc: 'Xây dựng cơ bắp và sức mạnh toàn thân.'
        },
        Cardio: {
            title: 'Cardio Training',
            content: `
        <h4 class="font-bold mb-2">Các loại máy cardio:</h4>
        <ul class="list-disc list-inside mb-4">
          <li>Máy chạy bộ (Treadmill)</li>
          <li>Xe đạp tập (Bike)</li>
          <li>Máy leo núi (Climber)</li>
          <li>Máy chèo thuyền (Rowing)</li>
        </ul>
        <h4 class="font-bold mb-2">Chương trình gợi ý:</h4>
        <ul class="list-disc list-inside">
          <li>Khởi động: 5 phút</li>
          <li>Cardio chính: 20-30 phút</li>
          <li>Thư giãn: 5 phút</li>
        </ul>
      `,
            icon: '🏃‍♂️',
            desc: 'Đốt mỡ hiệu quả và cải thiện sức bền tim mạch.'
        },
        Aerobic: {
            title: 'Lớp Aerobic',
            content: `
        <h4 class="font-bold mb-2">Lịch học:</h4>
        <ul class="list-disc list-inside mb-4">
          <li>Thứ 2, 4, 6: 18:00 - 19:00</li>
          <li>Thứ 7: 9:00 - 10:00</li>
          <li>Chủ nhật: 16:00 - 17:00</li>
        </ul>
        <h4 class="font-bold mb-2">Nội dung:</h4>
        <ul class="list-disc list-inside">
          <li>Aerobic cơ bản</li>
          <li>Dance Fitness</li>
          <li>Step Aerobic</li>
          <li>Zumba</li>
        </ul>
      `,
            icon: '💃',
            desc: 'Âm nhạc sôi động, đốt năng lượng mỗi ngày.'
        },
        Boxing: {
            title: 'Lớp Boxing',
            content: `
        <h4 class="font-bold mb-2">Lịch học:</h4>
        <ul class="list-disc list-inside mb-4">
          <li>Thứ 3, 5: 19:00 - 20:00</li>
          <li>Thứ 7: 10:00 - 11:00</li>
        </ul>
        <h4 class="font-bold mb-2">Kỹ thuật cơ bản:</h4>
        <ul class="list-disc list-inside">
          <li>Tư thế đấm (Stance)</li>
          <li>Jab, Cross, Hook, Uppercut</li>
          <li>Footwork & Defense</li>
          <li>Combo techniques</li>
        </ul>
      `,
            icon: '🥊',
            desc: 'Rèn luyện thể lực và phản xạ nhanh nhẹn.'
        },
        'Aqua Fitness': {
            title: 'Aqua Fitness',
            content: `
        <h4 class="font-bold mb-2">Lịch học:</h4>
        <ul class="list-disc list-inside mb-4">
          <li>Thứ 2, 4: 20:00 - 21:00</li>
          <li>Thứ 6: 19:00 - 20:00</li>
          <li>Chủ nhật: 10:00 - 11:00</li>
        </ul>
        <h4 class="font-bold mb-2">Lợi ích:</h4>
        <ul class="list-disc list-inside">
          <li>Giảm áp lực lên khớp</li>
          <li>Tăng sức bền tim mạch</li>
          <li>Đốt cháy calo hiệu quả</li>
          <li>Thư giãn cơ bắp</li>
        </ul>
      `,
            icon: '🏊‍♀️',
            desc: 'Tập luyện dưới nước, an toàn và hiệu quả.'
        },
    };

    // Hiển thị chi tiết bài tập
    const handleShowWorkout = (key) => {
        setSelectedWorkout(workoutData[key]);
        setModalVisible(true);
    };

    return (
        <section id="workouts" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Bài tập & Lớp học</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(workoutData).map(([key, item]) => (
                        <div key={key} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 card-hover shadow hover:shadow-xl transition">
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-600 mb-4">{item.desc}</p>
                            <button
                                onClick={() => handleShowWorkout(key)}
                                className="text-purple-600 font-semibold hover:text-purple-800"
                            >
                                Xem chi tiết →
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal chi tiết */}
            <WorkoutModal
                visible={modalVisible}
                title={selectedWorkout?.title}
                content={selectedWorkout?.content}
                onClose={() => setModalVisible(false)}
            />
        </section>
    );
}
