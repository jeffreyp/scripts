(*
    Create Meeting from Message
*)
tell application "Microsoft Outlook"
    
    -- get the currently selected message(s)
    set selectedMessages to current messages
    
    -- if there are no messages selected, warn the user and then quit
    if selectedMessages is {} then
        display dialog "Please select a message first and then run this script." with icon 1
        return
    end if
    
    repeat with theMessage in selectedMessages
        
        -- Store data from theMessage in variables, and set the start/end date to tomorrow + 1 hour
        set theName to subject of theMessage
        set theCategory to category of theMessage
        set theDateRecvd to (current date) + 1 * days
        set theHTMLStatus to has html of theMessage
        set theAttachment to attachment of theMessage
        set theEndDate to (current date) + (1 * days)
        set theEndDate to theEndDate + (1 * hours)
        
        set thePriority to priority of theMessage
        set theContent to content of theMessage
        
        -- Create a new Calendar Appointment with the information from theMessage
        set newAppt to make new calendar event with properties {subject:theName, start time:theDateRecvd, end time:theEndDate, has reminder:true, reminder time:5, content:theContent}
        
    end repeat
    
    -- If there was only one message selected, then create the Appointment.
    if (count of selectedMessages) = 1 then open newAppt
end tell