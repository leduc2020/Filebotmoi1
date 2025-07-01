const spamIntervals = {};

const SPAM_MESSAGE = `🛸　　🪐　 　🌎　°　　🌓　•　⚕️　.°•　　　🚀 ✯.  YUZ 𝗕Á 𝗖𝗛Ủ 𝗦À𝗡 𝗡À𝗬 𝗥Ồ𝗜 𝗡𝗛Ậ𝗡 𝗧𝗛𝗨𝗔 Đ𝗜💦▁▂▃▄▅▆▇▇▆▅▄▅▆▇▇▆▅▄▄▅▆▇▇▆▅▄嘉明和志靜嘉明学校嘉明和志靜嘉明学校🛸　　🪐　 　🌎　°　　🌓　•　⚕️　.°•　　　🚀 ✯.                YUZ 𝗕Á 𝗖𝗛Ủ 𝗦À𝗡 𝗡À𝗬 𝗥Ồ𝗜 𝗡𝗛Ậ𝗡 𝗧𝗛𝗨𝗔 Đ𝗜💦▁▂▃▄▅▆▇▇▆▅▄▅▆▇▇▆▅▄▄▅▆▇▇▆▅▄嘉明和志靜嘉明学校嘉明和志靜嘉明学校🛸　　🪐　 　🌎　°　　🌓　•　⚕️　.°•　　　🚀 ✯.  YUZ 𝗕Á 𝗖𝗛Ủ 𝗦À𝗡 𝗡À𝗬 𝗥Ồ𝗜 𝗡𝗛Ậ𝗡 𝗧𝗛𝗨𝗔 Đ𝗜💦▁▂▃▄▅▆▇▇▆▅▄▅▆▇▇▆▅▄▄▅▆▇▇▆▅▄嘉明和志靜嘉明学校嘉明和志靜嘉明学校🛸　　🪐　 　🌎　°　　🌓　•　⚕️　.°•　　　🚀 ✯.                YUZ 𝗕Á 𝗖𝗛Ủ 𝗦À𝗡 𝗡À𝗬 𝗥Ồ𝗜 𝗡𝗛Ậ𝗡 𝗧𝗛𝗨𝗔 Đ𝗜💦▁▂▃▄▅▆▇▇▆▅▄▅▆▇▇▆▅▄▄▅▆▇▇▆▅▄嘉明和志靜嘉明学校嘉明和志靜嘉明学校🛸　　🪐　 　🌎　°　　🌓　•　⚕️　.°•　　　🚀 ✯.  YUZ 𝗕Á 𝗖𝗛Ủ 𝗦À𝗡 𝗡À𝗬 𝗥Ồ𝗜 𝗡𝗛Ậ𝗡 𝗧𝗛𝗨𝗔 Đ𝗜💦▁▂▃▄▅▆▇▇▆▅▄▅▆▇▇▆▅▄▄▅▆▇▇▆▅▄嘉明和志靜嘉明学校嘉明和志靜嘉明学校🛸　　🪐　 　🌎　°　　🌓　•　⚕️　.°•　　　🚀 ✯.                YUZ 𝗕Á 𝗖𝗛Ủ 𝗦À𝗡 𝗡À𝗬 𝗥Ồ𝗜 𝗡𝗛Ậ𝗡 𝗧𝗛𝗨𝗔 Đ𝗜💦▁▂▃▄▅▆▇▇▆▅▄▅▆▇▇▆▅▄▄▅▆▇▇▆▅▄嘉明和志靜嘉明学校嘉明和志靜嘉明学校🛸　　🪐　 　🌎　°　　🌓　•　⚕️　.°•　　　🚀 ✯.  YUZ 𝗕Á 𝗖𝗛Ủ 𝗦À𝗡 𝗡À𝗬 𝗥Ồ𝗜 𝗡𝗛Ậ𝗡 𝗧𝗛𝗨𝗔 Đ𝗜💦▁▂▃▄▅▆▇▇▆▅▄▅▆▇▇▆▅▄▄▅▆▇▇▆▅▄嘉明和志靜嘉明学校嘉明和志靜嘉明学校🛸　　🪐　 　🌎　°　　🌓　•　⚕️　.°•　　　🚀 ✯.                YUZ 𝗕Á 𝗖𝗛Ủ 𝗦À𝗡 𝗡À𝗬 𝗥Ồ𝗜 𝗡𝗛Ậ𝗡 𝗧𝗛𝗨𝗔 Đ𝗜💦▁▂▃▄▅▆▇▇▆▅▄▅▆▇▇▆▅▄▄▅▆▇▇▆▅▄嘉明和志靜嘉明学校嘉明和志靜嘉明学校🛸　　🪐　 　🌎　°　　🌓　•　⚕️　.°•　　　🚀 ✯.  YUZ 𝗕Á 𝗖𝗛Ủ 𝗦À𝗡 𝗡À𝗬 𝗥Ồ𝗜 𝗡𝗛Ậ𝗡 𝗧𝗛𝗨𝗔 Đ𝗜💦▁▂▃▄▅▆▇▇▆▅▄▅▆▇▇▆▅▄▄▅▆▇▇▆▅▄嘉明和志靜嘉明学校嘉明和志靜嘉明学校🛸　　🪐　 　🌎　°　　🌓　•　⚕️　.°•　　　🚀 ✯.                YUZ 𝗕Á 𝗖𝗛Ủ 𝗦À𝗡 𝗡À𝗬 𝗥Ồ𝗜 𝗡𝗛Ậ𝗡 𝗧𝗛𝗨𝗔 Đ𝗜💦▁▂▃▄▅▆▇▇▆▅▄▅▆▇▇▆▅▄▄▅▆▇▇▆▅▄嘉明和志靜嘉明学校嘉明和志靜嘉明学校🛸　　🪐　 　🌎　°　　🌓　•　⚕️　.°•　　　🚀 ✯.  YUZ 𝗕Á 𝗖𝗛Ủ 𝗦À𝗡 𝗡À𝗬 𝗥Ồ𝗜 𝗡𝗛Ậ𝗡 𝗧𝗛𝗨𝗔 Đ𝗜💦▁▂▃▄▅▆▇▇▆▅▄▅▆▇▇▆▅▄▄▅▆▇▇▆▅▄嘉明和志靜嘉明学校嘉明和志靜嘉明学校🛸　　🪐　 　🌎　°　　🌓　•　⚕️　.°•　　　🚀 ✯.                YUZ 𝗕Á 𝗖𝗛Ủ 𝗦À𝗡 𝗡À𝗬 𝗥Ồ𝗜 𝗡𝗛Ậ𝗡 𝗧𝗛𝗨𝗔 Đ𝗜💦▁▂▃▄▅▆▇▇▆▅▄▅▆▇▇▆▅▄▄▅▆▇▇▆▅▄嘉明和志靜嘉明学校嘉明和志靜嘉明学校`.repeat(5);

module.exports.config = {
  name: "war1",
  version: "2.0.1",
  hasPermssion: 0,
  credits: "Duc Lê",
  description: "Spam nội dung siêu nhanh 10ms",
  commandCategory: "tool",
  usages: "spamok on/off",
  cooldowns: 1,
};

module.exports.run = async function({ api, event, args }) {
  const threadID = event.threadID;
  const command = args[0];

  if (command === "on") {
    if (spamIntervals[threadID]) {
      return api.sendMessage("🚫 Đang spam rồi, hãy tắt trước khi bật lại.", threadID);
    }

    spamIntervals[threadID] = setInterval(() => {
      api.sendMessage(SPAM_MESSAGE, threadID);
    }, 20000); // 10ms = 0.01 giây

    return api.sendMessage("🚀 Bắt đầu spam mỗi 7.1 giây (10ms)!", threadID);

  } else if (command === "off") {
    if (!spamIntervals[threadID]) {
      return api.sendMessage("⚠️ Không có spam nào đang chạy.", threadID);
    }

    clearInterval(spamIntervals[threadID]);
    delete spamIntervals[threadID];
    return api.sendMessage("✅ Đã dừng spam.", threadID);

  } else {
    return api.sendMessage("📌 Dùng: spamok on/off", threadID);
  }
};