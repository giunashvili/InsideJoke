export default function () {
    return `
<form>
    <input 
        type="text" 
        id="newMemberName" 
        name="newMemberName" 
        placeholder="სახელი"
    >
    <div class="memberParameters">
        <input 
            class="parameter"
            type="text" 
            id="newMemberInstrument" 
            name="newMemberInstrument" 
            placeholder="ინსტრუმენტი"
        >
        <input 
            class="parameter"
            type="number" 
            id="orbitWidth" 
            name="orbitWidth" 
            placeholder="ორბიტის სიგანე"
        >
        <input 
            class="parameter" 
            type="text"
            id="memberColor"
            name="memberColor"
            placeholder="ფერი"
        >
    </div>
    <textarea 
        id="memberDesc" 
        name="memberDesc" 
        placeholder="რას გვეტყვით ამ წევრის შესახებ?"
    >
    </textarea>
    <input 
        type="button" 
        class="blue-add-button" 
        value="დაამატე წევრი"
    >
    <div class="back-button">გადი უკან</div>
</form>
            `;
}