<template>
    <div class="valentine-container">
      <!-- 飘落的心形 -->
      <div class="hearts">
        <div
          v-for="(heart, index) in hearts"
          :key="index"
          class="heart"
          :style="heart.style"
        ></div>
      </div>
  
      <!-- 主要内容 -->
      <div class="content">
        <h1 class="title">❤️ 情人节快乐！ ❤️</h1>
  
        <!-- 情话卡片 -->
        <div class="message-box">
          <p class="message">{{ currentMessage }}</p>
          <button class="love-btn" @click="showNextMessage">
            {{ buttonText }}
          </button>
        </div>
  
        <!-- 信封互动 -->
        <div class="envelope" @click="createHearts">
          <div class="heart-icon">💌</div>
          <p>点击信封送爱心</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  
  // 情话列表
  const messages = [
    "你是我生命中最美的遇见",
    "每一天都因你而甜蜜",
    "愿与你共度每一个朝夕",
    "你是我心中永恒的星辰",
    "我爱你，直到永远...",
  ];
  
  // 当前情话索引
  const currentIndex = ref(0);
  
  // 飘落的心形数据
  const hearts = ref([]);
  
  // 当前显示的情话
  const currentMessage = computed(() => messages[currentIndex.value]);
  
  // 按钮文本
  const buttonText = computed(() =>
    currentIndex.value < messages.length - 1 ? "下一句情话" : "重新开始"
  );
  
  // 显示下一句情话
  const showNextMessage = () => {
    if (currentIndex.value < messages.length - 1) {
      currentIndex.value++;
    } else {
      currentIndex.value = 0;
    }
  };
  
  // 创建飘落的心形
  const createHearts = () => {
    for (let i = 0; i < 10; i++) {
      const heart = {
        style: {
          left: Math.random() * 100 + "%",
          animationDelay: Math.random() * 2 + "s",
        },
      };
      hearts.value.push(heart);
  
      setTimeout(() => {
        hearts.value = hearts.value.filter((h) => h !== heart);
      }, 5000);
    }
  };
  
  // 页面加载后初始化
  onMounted(() => {
    createHearts(); // 初始时创建一些心形
  });
  </script>
  
  <style scoped>
  .valentine-container {
    min-height: 100vh;
    background: linear-gradient(45deg, #ff7eb3, #ff758c);
    font-family: 'Microsoft Yahei', cursive;
    position: relative;
    overflow: hidden;
  }
  
  .content {
    position: relative;
    z-index: 1;
    padding: 2rem;
    text-align: center;
    color: white;
  }
  
  .title {
    font-size: 2.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    animation: fadeIn 1s ease-in;
  }
  
  .message-box {
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    max-width: 500px;
    margin: 2rem auto;
  }
  
  .message {
    font-size: 1.5rem;
    color: #ff6b6b;
    min-height: 80px;
    transition: all 0.5s ease;
  }
  
  .love-btn {
    background: #ff4757;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 25px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: transform 0.3s ease;
    margin-top: 1rem;
  }
  
  .love-btn:hover {
    transform: scale(1.1);
    background: #ff6b81;
  }
  
  .envelope {
    margin-top: 2rem;
    cursor: pointer;
    animation: float 3s ease-in-out infinite;
  }
  
  .heart-icon {
    font-size: 4rem;
  }
  
  .hearts {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  
  .heart {
    position: absolute;
    width: 20px;
    height: 20px;
    background: #ff6b6b;
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 50% 75%, 18% 100%, 0% 38%);
    animation: fall 5s linear infinite;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  
  @keyframes fall {
    from {
      transform: translateY(-100vh) rotate(0deg);
      opacity: 1;
    }
    to {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
  
  @media (max-width: 768px) {
    .title {
      font-size: 2rem;
    }
    .message {
      font-size: 1.2rem;
    }
  }
  </style>
