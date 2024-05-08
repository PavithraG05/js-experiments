const parseAndDisplayName = (f_name) => {

    let find_space = f_name.indexOf(' ');
    let first_name = f_name.substring(0,find_space);
    let last_name = f_name.substring(find_space+1);

    console.log(`Name: ${f_name}`);
    console.log(`First name: ${first_name}`);
    console.log(`Last name :${last_name}`);

}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("ian auston");
parseAndDisplayName("Siddalee Grace");