// 模擬數據源
const data = [
    { id: 1, name: "張小明", role: "前端工程師1", dept: "技術部", status: "active" },
    { id: 2, name: "李華", role: "產品經理", dept: "產品部", status: "pending" },
    { id: 3, name: "王大同", role: "UI 設計師", dept: "設計部", status: "active" },
    { id: 4, name: "趙敏", role: "後端工程師", dept: "技術部", status: "active" },
    { id: 5, name: "陳阿強", role: "行銷專員", dept: "市場部", status: "pending" }
];

const tableBody = document.getElementById('tableBody');
const searchInput = document.getElementById('searchInput');

// 渲染表格函式
function renderTable(filterData) {
    tableBody.innerHTML = filterData.map(item => `
        <tr>
            <td>${item.id}</td>
            <td><strong>${item.name}</strong></td>
            <td>${item.role}</td>
            <td>${item.dept}</td>
            <td><span class="status ${item.status}">${item.status.toUpperCase()}</span></td>
        </tr>
    `).join('');
}

// 初始化
renderTable(data);

// 搜尋功能
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = data.filter(item => 
        item.name.toLowerCase().includes(term) || 
        item.role.toLowerCase().includes(term)
    );
    renderTable(filtered);
});