export const translateIngredient = (ingredient, count) => {
    if(ingredient == 'oil') return `(${count}) گرم روغن`;
    if(ingredient == 'cheese') return `(${count}) گرم پنیر`;
    if(ingredient == 'egg') return `(${count}) عدد تخم مرغ`;
    if(ingredient == 'butter') return `(${count}) گرم کره بادام زمینی`;
    if(ingredient == 'bread') return `(${Math.ceil(count)}) عدد نان`;
    if(ingredient == 'beans_lubia') return `(${count}) گرم لوبیا`;
    if(ingredient == 'rice') return `(${count}) گرم برنج`;
    if(ingredient == 'meat') return `(${count}) گرم گوشت`;
    if(ingredient == 'beans_lape') return `(${count}) گرم لپه`;
    if(ingredient == 'chicken') return `(${count}) گرم مرغ`;
    if(ingredient == 'rob') return `(${count}) گرم رب گوجه`;
    if(ingredient == 'vegtables_sabzi') return `(${count}) گرم سبزی کوکو`;
    if(ingredient == 'potato') return `(${count}) عدد سیب زمینی`;
}