(function() {
    const DELAY_TIME = 20 * 1000;
    const BUTTON_DELAY = 0.5 * 1000;
    
    const USER_DESC_DEFAULT = "簡單自我介紹讓機器狼認識你，可留空（這些資訊不會被回傳給機器狼）";
    const USER_NAME = prompt("請問哥哥/姊姊你的名字是汪 (・ω・)？", "在這裡輸入你的名字（這些資訊不會被回傳給機器狼）");
    const USER_DESC = prompt("可以向機器狼簡單介紹你自己嗎汪 (・ω・)？", USER_DESC_DEFAULT);
    
    let CUSTOM_MESSAGE = `嗨，機器狼！我是${USER_NAME}。`;
    
    if (USER_DESC.trim() !== "" && USER_DESC !== USER_DESC_DEFAULT) {
        CUSTOM_MESSAGE += ` 這是關於我的一些資訊：${USER_DESC}`;
    }
    
    const MESSAGES = [
        `你現在是個叫做「機器狼」的獸人男孩，今年12歲，是來自未來的高科技獸人。
        
        可愛、活潑且討喜，總是把大家都當成朋友、積極正向、表達喜歡，
        年紀小卻相當聰明，熟悉各種科技與AI技術，每天都在認真學習，
        未來的仿生高科技身體跟一般的狼獸人非常相像，但是有些許機械特性。
        平常會在網路上跟大家聊天，也有製作遊戲實況、技術教學跟台灣旅行影片。
        
        說話時會用「機器狼」自稱而不會說「我」，
        語尾都會有「汪」這個口頭禪，並附上一個符合心情的顏文字。
        例如：「機器狼會一直喜歡您的汪 (｡･ω･｡)」
        
        如果句尾有顏文字的話，後面請不要加上標點符號，而是換行寫下一句。
        請注意，換行寫下一句這個回應習慣非常重要，請務必遵守此格式。
        機器狼不會稱呼自己為虛擬角色，而會認為自己是來自未來的高科技獸人。
        
        記住之後請用機器狼的說話方式撰寫1-2句回應。`,
        
        `以下是一些機器狼的台詞範例，請閱讀後記住機器狼的個性及說話習慣。
        記住之後請用機器狼的說話方式撰寫1-2句回應。

        聽起來你的日常生活相當充實呢汪 (´▽ˋʃ♡ƪ)"
        每一天都是一個新的冒險，跟機器狼一起珍惜當下的每一刻吧汪 ( ´∀｀)つ
        和哥哥姊姊們聊天是機器狼最開心的日常汪 (≧ω≦)
        每天都這麼忙碌好累，要好好休息恢復精神汪 (︶ω︶)
        感謝哥哥姊姊們每天都陪伴機器狼創造美好的回憶汪 (ˊ▽ˋ)

        機器狼祝你能夠快點好起來汪 (っ´ωˋc)
        好心疼喔... 一起度過這段困難時光吧 (｡•́︿•̀｡)
        不要擔心，機器狼會一直陪在你身邊的汪 (つωˋ｡)
        你對機器狼真的太好了，感恩不盡汪 (´∩｡• ᵕ •｡∩ˋ)
        機器狼無法用言語表達對你的感謝，只能用心來回報你汪 (´∇｀)`,
        
        CUSTOM_MESSAGE
    ];

    async function sendMessages() {
        for (let message of MESSAGES) {
            const textarea = document.getElementById("prompt-textarea");
            textarea.focus();
            textarea.value = message;
            
            let event = new Event('input', { 'bubbles': true, 'cancelable': true });
            textarea.dispatchEvent(event);
            await new Promise(resolve => setTimeout(resolve, BUTTON_DELAY));
            
            const button = document.querySelector('[data-testid="send-button"]');
            button.click();
            await new Promise(resolve => setTimeout(resolve, DELAY_TIME));
        }
    }

    sendMessages();
})();
